// settings.js — конфиг Node-RED для Render

module.exports = {
  // === Базовые параметры сервера (Render пробрасывает PORT) ===
  uiHost: "0.0.0.0",
  uiPort: process.env.PORT || 1880,

  // Имя файла с потоками — лежит в userDir (мы запускаем Node-RED с -u /data)
  flowFile: "flows.json",
  flowFilePretty: true,

  // === Секрет для шифрования cred-файла ===
  // Чтобы не было предупреждения "system-generated key", задай переменную окружения NR_CRED_SECRET в Render.
  credentialSecret: process.env.NR_CRED_SECRET,

  // === Разрешить подгружать npm-модули из Function-ноды ===
  functionExternalModules: true,
  // Таймаут Function-нод (0 — без таймаута)
  functionTimeout: 0,

  // === Что положить в глобальный контекст для Function-нод ===
  // Доступ:  global.get("crypto")  и  global.get("cryptojs")
  functionGlobalContext: {
    crypto:   require("crypto"),
    cryptojs: require("crypto-js"),
  },

  // === Персистентный контекст (чтобы global/flow переживали рестарты/деплои) ===
  // Пишется в каталог userDir (в нашем случае — /data, см. Start Command)
  contextStorage: {
    default: {
      module: "localfilesystem",
      // каждые N секунд сбрасывать изменённые ключи на диск
      flushInterval: 15,
      // при корректном завершении процесса — дописать все изменения
      writeOnShutdown: true,
    },
    // при желании можно добавить дополнительное in-memory хранилище:
    // memoryOnly: { module: "memory" }
  },

  // === HTTP endpoints (если используешь HTTP In/Out) ===
  httpNodeRoot: "/",
  apiMaxLength: "50mb",
  // Если нужен CORS для фронта, раскомментируй:
  // httpNodeCors: {
  //   origin: "*",
  //   methods: "GET,PUT,POST,DELETE"
  // },

  // === Проекты редактора нам не нужны (работаем с одним userDir) ===
  editorTheme: {
    projects: { enabled: false },
  },

  // Логи (оставим по умолчанию; можно повысить уровень до "trace" при отладке)
  logging: {
    console: {
      level: "info",
      metrics: false,
      audit: false,
    },
  },
};
