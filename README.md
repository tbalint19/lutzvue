# Lutzvue

Idle user checking for frontend applications

# Usage

__Start monitoring the user__
```js
created() {
  this.$watchIdle()
}

// or

created() {
  this.$watchIdle()
}
```

__Subscribe with a function__
```js
created() {
  this.$watchIdle()
  this.$onIdle(() => alert("HEY"))
}
```

```js
methods: {
  loadSomething() {
    this.$ignoreIdle()
    API.loadSomething().then(/*...*/)

  }
}
```


# License

MIT © TBalint19
