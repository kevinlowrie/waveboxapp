module.exports = Object.freeze({
  // App
  APP_ID: 'wavebox.io',
  ANALYTICS_HEARTBEAT_INTERVAL: 1000 * 60 * 5, // 5 mins

  // Database
  PERSISTENCE_INDEX_KEY: '__index__',
  DB_WRITE_DELAY_MS: 500, // 0.5secs

  // Mailboxes
  MAILBOX_SLEEP_WAIT: 1000 * 60 * 5, // 5 minutes
  REFOCUS_MAILBOX_INTERVAL_MS: 300,

  // Google
  GOOGLE_PROFILE_SYNC_INTERVAL: 1000 * 60 * 60 * 6, // 6 hours
  GOOGLE_MAILBOX_WATCH_INTERVAL: 1000 * 60 * 60 * 24 * 6, // 6 days

  // Trello
  TRELLO_PROFILE_SYNC_INTERVAL: 1000 * 60 * 60 * 6, // 6 hours
  TRELLO_NOTIFICATION_SYNC_INTERVAL: 1000 * 30, // 30 secs

  // Slack
  SLACK_FULL_COUNT_SYNC_INTERVAL: 1000 * 60 * 5, // 5 mins

  // Microsoft
  MICROSOFT_PROFILE_SYNC_INTERVAL: 1000 * 60 * 60 * 6, // 6 hours
  MICROSOFT_UNREAD_SYNC_INTERVAL: 1000 * 60, // 60 seconds

  // Sync
  SYNC_SOCKET_URL: 'wss://wavebox.io/socket',
  SYNC_SOCKET_UPGRADE_INTERVAL: 1000 * 60 * 5, // 5 minutes

  // Notifications
  NOTIFICATION_MAX_AGE: 1000 * 60 * 60, // 1 hour
  NOTIFICATION_FIRST_RUN_GRACE_MS: 1000 * 30, // 30 seconds
  DISALLOWED_HTML5_NOTIFICATION_HOSTS: [
    'mail.google.com',
    'inbox.google.com',
    'trello.com',
    '.slack.com'
  ],

  // Cookies
  ARTIFICIAL_COOKIE_PERSIST_WAIT: 1000 * 30, // 30 secs
  ARTIFICIAL_COOKIE_PERSIST_PERIOD: 30 * 24 * 60 * 60 * 1000, // 30 days

  // URLs
  WEB_URL: 'https://wavebox.io',
  GITHUB_URL: 'https://github.com/wavebox/waveboxapp/',
  GITHUB_ISSUE_URL: 'https://github.com/wavebox/waveboxapp/issues/',
  PRIVACY_URL: 'https://wavebox.io/privacy/',
  TERMS_URL: 'https://wavebox.io/terms/',
  USER_SCRIPTS_WEB_URL: 'https://github.com/Thomas101/wmail-user-scripts',

  // Update
  UPDATE_FEED_DARWIN: 'https://wavebox.io/squirrel/darwin/updates/latest/',
  UPDATE_FEED_WIN32_IA32: 'https://wavebox.io/squirrel/win32_ia32/updates/latest/',
  UPDATE_FEED_WIN32_X64: 'https://wavebox.io/squirrel/win32_x86_64/updates/latest/',
  UPDATE_FEED_MANUAL: 'https://wavebox.io/updates/latest/',
  UPDATE_CHECK_INTERVAL: 1000 * 60 * 60 * 12 // 12 hours
})
