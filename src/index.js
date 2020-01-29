import idle from 'lutzjs'

export default class IdlePlugin {
  static install(Vue, options) {

    Vue.prototype.$onIdle = function (timeString, func) {
      idle.on(timeString, func)
    }

    Vue.prototype.$observeIdle = function () {
      idle.observe()
    }

    Vue.prototype.$ignoreIdle = function () {
      idle.ignore()
    }

    Vue.prototype.$ignoreOnIdle = function () {
      idle.ignoreSubscribtion()
    }

  }
}
