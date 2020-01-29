import idle from 'lutzjs'

export default class IdlePlugin {
  static install(Vue, options) {

    Vue.prototype.$onIdle = function (func) {
      idle.on(func)
    }

    Vue.prototype.$watchIdle = function (millis, _window) {
      const _millis = millis || options.millis || undefined
      idle.watch(_millis, _window)
    }

    Vue.prototype.$ignoreIdle = function () {
      idle.ignore()
    }

  }
}
