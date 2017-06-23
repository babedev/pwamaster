if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'output'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'output'.");
}
var output = function (_, Kotlin) {
  'use strict';
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var appendText = Kotlin.kotlin.dom.appendText_46n0ku$;
  function app(id, child) {
    if (id === void 0)
      id = 'app';
    var tmp$_0;
    var app_0 = (tmp$_0 = document.getElementById(id)) != null ? tmp$_0 : Kotlin.throwNPE();
    child(new Child(app_0));
    return app_0;
  }
  function div(id, child) {
    var tmp$_0;
    var app_0 = (tmp$_0 = document.getElementById(id)) != null ? tmp$_0 : Kotlin.throwNPE();
    child(new Child(app_0));
    return app_0;
  }
  function empty(id) {
    var tmp$_0;
    var div_0 = (tmp$_0 = document.getElementById(id)) != null ? tmp$_0 : Kotlin.throwNPE();
    div_0.innerHTML = '';
  }
  function src($receiver, value) {
    if (value === void 0)
      value = '';
    $receiver.setAttribute('src', value);
  }
  function width($receiver, value) {
    if (value === void 0)
      value = '';
    $receiver.setAttribute('width', value);
  }
  function height($receiver, value) {
    if (value === void 0)
      value = '';
    $receiver.setAttribute('height', value);
  }
  function Child(parent) {
    this.parent = parent;
  }
  Child.prototype.div_7h4oe2$ = function (id, className, width_0, child) {
    if (id === void 0)
      id = '';
    if (className === void 0)
      className = '';
    if (width_0 === void 0)
      width_0 = 0;
    var div_0 = this.element_0('div');
    var $receiver = className;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver))
      addClass(div_0, [className]);
    var $receiver_0 = id;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver_0))
      div_0.id = id;
    if (width_0 !== 0)
      div_0.setAttribute('width', width_0.toString() + 'px');
    this.parent.appendChild(div_0);
    child(new Child(div_0));
    return div_0;
  };
  Child.prototype.strong_xddp9w$ = function (child) {
    var strong = this.element_0('strong');
    this.parent.appendChild(strong);
    child(new Child(strong));
  };
  function Child$a$lambda(closure$onclick) {
    return function (it) {
      closure$onclick();
    };
  }
  Child.prototype.a_juj0ph$ = function (id, className, onclick, child) {
    if (id === void 0)
      id = '';
    if (className === void 0)
      className = '';
    var a = this.element_0('a');
    var $receiver = id;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver))
      a.id = id;
    var $receiver_0 = className;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver_0))
      addClass(a, [className]);
    a.addEventListener('click', Child$a$lambda(onclick));
    this.parent.appendChild(a);
    child(new Child(a));
  };
  function Child$img$lambda($receiver) {
  }
  Child.prototype.img_v32w2o$ = function (id, width_0, height_0, block) {
    if (id === void 0)
      id = '';
    if (width_0 === void 0)
      width_0 = 300;
    if (height_0 === void 0)
      height_0 = 300;
    if (block === void 0)
      block = Child$img$lambda;
    var $receiver = this.element_0('img');
    var closure$id = id;
    var closure$width = width_0;
    var closure$height = height_0;
    var closure$block = block;
    $receiver.id = closure$id;
    $receiver.setAttribute('width', closure$width.toString() + 'px');
    $receiver.setAttribute('height', closure$height.toString() + 'px');
    closure$block($receiver);
    var img = $receiver;
    this.parent.appendChild(img);
  };
  Child.prototype.span_xddp9w$ = function (child) {
    var span = this.element_0('span');
    this.parent.appendChild(span);
    child(new Child(span));
  };
  Child.prototype.text_61zpoe$ = function (text_0) {
    if (text_0 === void 0)
      text_0 = '';
    this.parent.appendChild(document.createTextNode(text_0));
  };
  Child.prototype.br = function () {
    this.parent.appendChild(this.element_0('br'));
  };
  Child.prototype.ul_xddp9w$ = function (child) {
    var ul = this.element_0('ul');
    this.parent.appendChild(ul);
    child(new Child(ul));
  };
  Child.prototype.li_xddp9w$ = function (child) {
    var li = this.element_0('li');
    this.parent.appendChild(li);
    child(new Child(li));
    return li;
  };
  function Child$button$lambda(closure$onclick) {
    return function (it) {
      closure$onclick();
    };
  }
  Child.prototype.button_a4mwiz$ = function (text_0, onclick) {
    var button = appendText(this.element_0('button'), text_0);
    button.className = 'button is-info';
    button.addEventListener('click', Child$button$lambda(onclick));
    this.parent.appendChild(button);
  };
  Child.prototype.element_0 = function (name) {
    return document.createElement(name);
  };
  Child.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Child',
    interfaces: []
  };
  var deviceId;
  var database;
  var messages;
  function main$lambda(result, f) {
    deviceId = result;
    render();
  }
  function main(args) {
    (new Fingerprint2()).get(main$lambda);
    listen();
  }
  function render$lambda$lambda($receiver) {
  }
  function render$lambda$lambda_0() {
    var $receiver = new Message(deviceId, 'test');
    database.ref('/messages/' + $receiver.date).set($receiver);
  }
  function render$lambda($receiver) {
    $receiver.text_61zpoe$(deviceId);
    $receiver.div_7h4oe2$('messages', void 0, void 0, render$lambda$lambda);
    $receiver.button_a4mwiz$('Send', render$lambda$lambda_0);
  }
  function render() {
    app(void 0, render$lambda);
  }
  function listen$lambda$lambda(child) {
    messages.add_11rb$(child.val());
  }
  function listen$lambda(snapshot) {
    messages.clear();
    snapshot.forEach(listen$lambda$lambda);
    renderMessages();
  }
  function listen() {
    database.ref('/messages').on('value', listen$lambda);
  }
  function renderMessages$lambda$lambda$lambda(closure$m) {
    return function ($receiver) {
      $receiver.text_61zpoe$(closure$m.detail);
    };
  }
  function renderMessages$lambda($receiver) {
    var tmp$_0;
    tmp$_0 = messages.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      $receiver.div_7h4oe2$(void 0, void 0, 10, renderMessages$lambda$lambda$lambda(element));
    }
  }
  function renderMessages() {
    empty('messages');
    div('messages', renderMessages$lambda);
  }
  function Message(device, detail, date) {
    if (device === void 0)
      device = '';
    if (detail === void 0)
      detail = '';
    if (date === void 0)
      date = (new Date()).getTime();
    this.device = device;
    this.detail = detail;
    this.date = date;
  }
  Message.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Message',
    interfaces: []
  };
  Message.prototype.component1 = function () {
    return this.device;
  };
  Message.prototype.component2 = function () {
    return this.detail;
  };
  Message.prototype.component3 = function () {
    return this.date;
  };
  Message.prototype.copy_do2bxa$ = function (device, detail, date) {
    return new Message(device === void 0 ? this.device : device, detail === void 0 ? this.detail : detail, date === void 0 ? this.date : date);
  };
  Message.prototype.toString = function () {
    return 'Message(device=' + Kotlin.toString(this.device) + (', detail=' + Kotlin.toString(this.detail)) + (', date=' + Kotlin.toString(this.date)) + ')';
  };
  Message.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.device) | 0;
    result = result * 31 + Kotlin.hashCode(this.detail) | 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    return result;
  };
  Message.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.device, other.device) && Kotlin.equals(this.detail, other.detail) && Kotlin.equals(this.date, other.date)))));
  };
  var package$com = _.com || (_.com = {});
  var package$github = package$com.github || (package$com.github = {});
  var package$babedev = package$github.babedev || (package$github.babedev = {});
  package$babedev.app_cjyqka$ = app;
  package$babedev.div_cjyqka$ = div;
  package$babedev.empty_61zpoe$ = empty;
  package$babedev.src_46n0ku$ = src;
  package$babedev.width_46n0ku$ = width;
  package$babedev.height_46n0ku$ = height;
  package$babedev.Child = Child;
  Object.defineProperty(package$babedev, 'deviceId', {
    get: function () {
      return deviceId;
    },
    set: function (value) {
      deviceId = value;
    }
  });
  Object.defineProperty(package$babedev, 'database', {
    get: function () {
      return database;
    }
  });
  Object.defineProperty(package$babedev, 'messages', {
    get: function () {
      return messages;
    }
  });
  package$babedev.main_kand9s$ = main;
  package$babedev.render = render;
  package$babedev.listen = listen;
  package$babedev.renderMessages = renderMessages;
  var package$model = package$babedev.model || (package$babedev.model = {});
  package$model.Message = Message;
  deviceId = '';
  var tmp$;
  database = (tmp$ = firebase.database()) != null ? tmp$ : Kotlin.throwNPE();
  messages = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
  Kotlin.defineModule('output', _);
  main([]);
  return _;
}(typeof output === 'undefined' ? {} : output, kotlin);

//@ sourceMappingURL=output.js.map
