require('babel-core/register')

const chromedriver = require('chromedriver');
require('geckodriver');

module.exports = {
  src_folders: ['tests/cadastro'],

  page_objects_path: './pages',
  globals_path: './hooks/globals.js',

  custom_commands_path:  '',

  custom_assertions_path: '',

  globals_path : '',

  webdriver: {
    start_process: true,
    server_path: chromedriver.path,
    port: 9515,
  },

  screenshots:{
    enabled: true,
    on_failure: true,
    on_error: true,
    path: 'tests_output/'
  },

  test_workers:{
    enabled: true,
    Workers: 2
  },

  test_settings: {
    default: {
      launch_url: "http://localhost:5000",
      globals: {
        waitForConditionTimeout: 15000
      },
      disable_error_log: false,
      launch_url: 'https://ecosia.org',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: "chrome"
      },
    },

    stage:{
      launch_url: "http://stage.zombieplus.com.br",
    },
    

    firefox: {
      desiredCapabilities : {
        browserName : 'firefox',
        alwaysMatch: {
          'moz:firefoxOptions': {
            args: [
            ],
          }
        }
      },
      webdriver: {
        start_process: true,
        port: 9515,
        server_path: chromedriver.path,
        cli_args: [
        ]
      }
    },

    chrome: {
      desiredCapabilities : {
        browserName : 'chrome',
        chromeOptions : {
          w3c: false,
          args: [
          ]
        }
      },

      webdriver: {
        start_process: true,
        port: 9515,
        server_path: '',
        cli_args: [
        ]
      }
    },

    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using the browserstack.com cloud service               |
    //                                                                               |
    // Please set the username and access key by setting the environment variables:  |
    // - BROWSERSTACK_USER                                                           |
    // - BROWSERSTACK_KEY                                                            |
    // .env files are supported                                                      |
    //////////////////////////////////////////////////////////////////////////////////
    browserstack: {
      selenium: {
        host: 'hub-cloud.browserstack.com',
        port: 443
      },

      desiredCapabilities: {
        'bstack:options' : {
          local: 'false',
          userName: '${BROWSERSTACK_USER}',
          accessKey: '${BROWSERSTACK_KEY}',
        }
      },

      disable_error_log: true,
      webdriver: {
        keep_alive: true
      }
    },

    'browserstack.chrome': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions : {
          w3c: false
        }
      }
    },

    'browserstack.firefox': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'firefox'
      }
    },

    'browserstack.ie': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'IE',
        browserVersion: '11.0',
        'bstack:options' : {
          os: 'Windows',
          osVersion: '10',
          local: 'false',
          seleniumVersion: '3.5.2',
          resolution: '1366x768'
        }
      }
    },

    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using the Selenium service, either locally or remote,  |
    //  like Selenium Grid                                                           |
    //////////////////////////////////////////////////////////////////////////////////
    selenium: {
      selenium: {
        start_process: true,
        port: 4444,
        server_path: '',
        cli_args: {
          'webdriver.gecko.driver': '',
          'webdriver.chrome.driver': ''
        }
      }
    },

    'selenium.chrome': {
      extends: 'selenium',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions : {
          w3c: false
        }
      }
    },

    'selenium.firefox': {
      extends: 'selenium',
      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: [
          ]
        }
      }
    }
  }
};
