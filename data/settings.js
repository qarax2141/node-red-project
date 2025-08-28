// data/settings.js
module.exports = {
  uiPort: process.env.PORT || 1880,
  flowFile: 'flows.json',
  flowFilePretty: true,

  editorTheme: { projects: { enabled: false } },

  // Функции без таймаута
  functionTimeout: 0,
  // Разрешить внешние модули (если пригодится)
  functionExternalModules: true,

  // СЕКРЕТ для cred-файла — вынеси в ENV, чтобы исчез варнинг
  credentialSecret: process.env.NR_CRED_SECRET || "change-this-to-a-very-long-secret",

  // ПЕРСИСТЕНТНЫЙ контекст (глобалки/контекст на диске /data)
  contextStorage: {
    default: { module: "localfilesystem" }
  },

  // Логи
  logging: { console: { level: "info", metrics: false, audit: false } },

  // Дать функциональным нодам доступ к встроенному Node 'crypto'
  functionGlobalContext: {
    crypto: require('crypto')
    // Если когда-нибудь пригодится crypto-js из /data:
    // cryptojs: require('/data/node_modules/crypto-js')
  }
};
