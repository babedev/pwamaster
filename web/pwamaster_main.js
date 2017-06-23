if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'pwamaster_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'pwamaster_main'.");
}
var pwamaster_main = function (_, Kotlin) {
  'use strict';
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var Enum = Kotlin.kotlin.Enum;
  Tab.prototype = Object.create(Enum.prototype);
  Tab.prototype.constructor = Tab;
  function app(id, child) {
    if (id === void 0)
      id = 'app';
    var tmp$;
    var app_0 = (tmp$ = document.getElementById(id)) != null ? tmp$ : Kotlin.throwNPE();
    child(new Child(app_0));
    return app_0;
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
    var div = this.element_0('div');
    var $receiver = className;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver))
      addClass(div, [className]);
    var $receiver_0 = id;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver_0))
      div.id = id;
    if (width_0 !== 0)
      div.setAttribute('width', width_0.toString() + 'px');
    this.parent.appendChild(div);
    child(new Child(div));
    return div;
  };
  Child.prototype.strong_xddp9w$ = function (child) {
    var strong = this.element_0('strong');
    this.parent.appendChild(strong);
    child(new Child(strong));
  };
  Child.prototype.canvas_ccskfk$ = function (id, className, width_0, height_0) {
    if (id === void 0)
      id = '';
    if (className === void 0)
      className = '';
    if (width_0 === void 0)
      width_0 = 300;
    if (height_0 === void 0)
      height_0 = 300;
    var $receiver = this.element_0('canvas');
    var closure$id = id;
    var closure$width = width_0;
    var closure$height = height_0;
    $receiver.id = closure$id;
    $receiver.setAttribute('width', closure$width.toString() + 'px');
    $receiver.setAttribute('height', closure$height.toString() + 'px');
    var canvas = $receiver;
    var $receiver_0 = className;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver_0))
      addClass(canvas, [className]);
    this.parent.appendChild(canvas);
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
  function Child$inputFile$lambda(closure$onchange) {
    return function () {
      closure$onchange();
    };
  }
  Child.prototype.inputFile_hgzy0z$ = function (id, className, onchange) {
    if (id === void 0)
      id = '';
    if (className === void 0)
      className = '';
    var $receiver = this.element_0('input');
    $receiver.setAttribute('type', 'file');
    $receiver.setAttribute('accept', 'image/*');
    var input = $receiver;
    var $receiver_0 = id;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver_0))
      input.id = id;
    var $receiver_1 = className;
    if (!Kotlin.kotlin.text.isBlank_gw00vp$($receiver_1))
      addClass(input, [className]);
    $(input).change(Child$inputFile$lambda(onchange));
    this.parent.appendChild(input);
    return input;
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
  Child.prototype.element_0 = function (name) {
    return document.createElement(name);
  };
  Child.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Child',
    interfaces: []
  };
  function Tab(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Tab_initFields() {
    Tab_initFields = function () {
    };
    Tab$TWTTR_instance = new Tab('TWTTR', 0);
    Tab$FB_instance = new Tab('FB', 1);
    Tab$IG_instance = new Tab('IG', 2);
  }
  var Tab$TWTTR_instance;
  function Tab$TWTTR_getInstance() {
    Tab_initFields();
    return Tab$TWTTR_instance;
  }
  var Tab$FB_instance;
  function Tab$FB_getInstance() {
    Tab_initFields();
    return Tab$FB_instance;
  }
  var Tab$IG_instance;
  function Tab$IG_getInstance() {
    Tab_initFields();
    return Tab$IG_instance;
  }
  Tab.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Tab',
    interfaces: [Enum]
  };
  function Tab$values() {
    return [Tab$TWTTR_getInstance(), Tab$FB_getInstance(), Tab$IG_getInstance()];
  }
  Tab.values = Tab$values;
  function Tab$valueOf(name) {
    switch (name) {
      case 'TWTTR':
        return Tab$TWTTR_getInstance();
      case 'FB':
        return Tab$FB_getInstance();
      case 'IG':
        return Tab$IG_getInstance();
      default:Kotlin.throwISE('No enum constant com.github.babedev.Tab.' + name);
    }
  }
  Tab.valueOf_61zpoe$ = Tab$valueOf;
  var twitterTab;
  var facebookTab;
  var igTab;
  var content;
  function main$lambda$lambda$lambda$lambda$lambda() {
    changeTab(Tab$TWTTR_getInstance());
  }
  function main$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.text_61zpoe$('Twitter');
  }
  function main$lambda$lambda$lambda$lambda($receiver) {
    $receiver.a_juj0ph$(void 0, void 0, main$lambda$lambda$lambda$lambda$lambda, main$lambda$lambda$lambda$lambda$lambda_0);
  }
  function main$lambda$lambda$lambda$lambda$lambda_1() {
    changeTab(Tab$FB_getInstance());
  }
  function main$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.text_61zpoe$('Facebook');
  }
  function main$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.a_juj0ph$(void 0, void 0, main$lambda$lambda$lambda$lambda$lambda_1, main$lambda$lambda$lambda$lambda$lambda_2);
  }
  function main$lambda$lambda$lambda$lambda$lambda_3() {
    changeTab(Tab$IG_getInstance());
  }
  function main$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.text_61zpoe$('Instagram');
  }
  function main$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.a_juj0ph$(void 0, void 0, main$lambda$lambda$lambda$lambda$lambda_3, main$lambda$lambda$lambda$lambda$lambda_4);
  }
  function main$lambda$lambda$lambda($receiver) {
    twitterTab = $receiver.li_xddp9w$(main$lambda$lambda$lambda$lambda);
    facebookTab = $receiver.li_xddp9w$(main$lambda$lambda$lambda$lambda_0);
    igTab = $receiver.li_xddp9w$(main$lambda$lambda$lambda$lambda_1);
  }
  function main$lambda$lambda($receiver) {
    $receiver.ul_xddp9w$(main$lambda$lambda$lambda);
  }
  function main$lambda$lambda_0($receiver) {
  }
  function main$lambda($receiver) {
    $receiver.div_7h4oe2$(void 0, 'tabs is-centered is-medium', void 0, main$lambda$lambda);
    content = $receiver.div_7h4oe2$(void 0, void 0, void 0, main$lambda$lambda_0);
  }
  function main(args) {
    app(void 0, main$lambda);
  }
  function changeTab(tab) {
    twitterTab.className = '';
    facebookTab.className = '';
    igTab.className = '';
    if (Kotlin.equals(tab, Tab$TWTTR_getInstance())) {
      twitterTab.className = 'is-active';
      renderTwitter();
    }
     else if (Kotlin.equals(tab, Tab$FB_getInstance())) {
      facebookTab.className = 'is-active';
      renderFB();
    }
     else if (Kotlin.equals(tab, Tab$IG_getInstance())) {
      igTab.className = 'is-active';
      renderIG();
    }
  }
  function renderTwitter() {
    content;
  }
  function renderFB() {
  }
  function renderIG() {
  }
  var package$com = _.com || (_.com = {});
  var package$github = package$com.github || (package$com.github = {});
  var package$babedev = package$github.babedev || (package$github.babedev = {});
  package$babedev.app_cjyqka$ = app;
  package$babedev.src_46n0ku$ = src;
  package$babedev.width_46n0ku$ = width;
  package$babedev.height_46n0ku$ = height;
  package$babedev.Child = Child;
  Object.defineProperty(Tab, 'TWTTR', {
    get: Tab$TWTTR_getInstance
  });
  Object.defineProperty(Tab, 'FB', {
    get: Tab$FB_getInstance
  });
  Object.defineProperty(Tab, 'IG', {
    get: Tab$IG_getInstance
  });
  package$babedev.Tab = Tab;
  Object.defineProperty(package$babedev, 'twitterTab', {
    get: function () {
      return twitterTab;
    },
    set: function (value) {
      twitterTab = value;
    }
  });
  Object.defineProperty(package$babedev, 'facebookTab', {
    get: function () {
      return facebookTab;
    },
    set: function (value) {
      facebookTab = value;
    }
  });
  Object.defineProperty(package$babedev, 'igTab', {
    get: function () {
      return igTab;
    },
    set: function (value) {
      igTab = value;
    }
  });
  Object.defineProperty(package$babedev, 'content', {
    get: function () {
      return content;
    },
    set: function (value) {
      content = value;
    }
  });
  package$babedev.main_kand9s$ = main;
  package$babedev.changeTab_x1uack$ = changeTab;
  package$babedev.renderTwitter = renderTwitter;
  package$babedev.renderFB = renderFB;
  package$babedev.renderIG = renderIG;
  twitterTab = document.createElement('div');
  facebookTab = document.createElement('div');
  igTab = document.createElement('div');
  content = document.createElement('div');
  Kotlin.defineModule('pwamaster_main', _);
  main([]);
  return _;
}(typeof pwamaster_main === 'undefined' ? {} : pwamaster_main, kotlin);

//@ sourceMappingURL=pwamaster_main.js.map
