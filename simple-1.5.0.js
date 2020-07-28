// Simple-JS v1.5
window.$ = function(el) {
  
  let res;
  
  const dom = {
    length: 0,
    val: function(newVal) {
      return newVal ? this[0].value = newVal : this[0].value;
    },
    text: function(newText) {
      return newText ? this[0].textContent = newText : this[0].textContent;
    },
    html: function(newHtml) {
      return newHtml ? this[0].innerHTML = newHtml : this[0].innerHTML;
    },
    on: function(type, callback, option) {
      return this[0].addEventListener(type, callback, option);
    },
    attr: function(atr, value) {
      return value ? this[0].setAttribute(atr, value) : this[0].getAttribute(atr);
    },
    hasAttr: function(atr) {
       return this[0].hasAttribute(atr);
    },
    remAttr: function(atr) {
      this[0].removeAttribute(atr);
      return dom;
    },
    togAttr: function(atr) {
      return this[0].toggleAttribute(atr);
    },
    title: function(newTitle) {
      return newTitle ? this[0].title = newTitle : this[0].title;
    },
    id: function(newId) {
      return newId ? this[0].id = newId : this[0].id;
    },
    class: function(newClass) {
      return newClass ? this[0].className = newClass : this[0].className;
    },
    addClass: function(name) {
      this[0].classList.add(name);
      return dom;
    },
    remClass: function(name) {
      this[0].classList.remove(name);
      return dom;
    },
    hasClass: function(name) {
      return this[0].classList.contains(name);
    },
    repClass: function(c1, c2) {
      this[0].classList.replace(c1, c2);
      return dom;
    },
    togClass: function(c1, c2) {
      this[0].classList.toggle(c1, c2);
      return dom;
    },
    show: function(type = "block") {
      this[0].style.display = type;
      return dom;
    },
    hide: function() {
      this[0].style.display = "none";
      return dom;
    },
    css: function(key, val) {
      if (typeof key == "object") {
        for (let k in key) {
            this[0].style.k = key[k];
            return;
          }
        }
      this[0].style.key = val;
      return dom;
    },
    prepend: function(_this) {
      const htmlBefore = this.html();
      this.html(_this+htmlBefore);
      return dom;
    },
    append: function(_this) {
      this[0].innerHTML += _this;
      return dom;
    },
    remove: function() {
      this[0].remove();
      return dom;
    },
    parent: function() {
      this[0] = this[0].parentNode;
      return dom;
    },
    prev: function() {
      this[0] = this[0].previousElementSibling;
      return dom;
    },
    next: function() {
      this[0] = this[0].nextElementSibling;
      return dom;
    },
    children: function() {
      const c = this[0].children
      dom.length = c.length;
      for (i=0;i < c.length; i++) {
        dom[i] = c[i];
      }
      return dom;
    },
    remChild: function(_this) {
      return this[0].removeChild(_this);
    },
    repChild: function(c1, c2) {
      return this[0].replaceChild(c1, c2);
    },
    before: function() {
      this[0] = this[0].before();
      return dom;
    },
    after: function() {
      this[0] = this[0].after();
      return dom;
    },
    first: function() {
      this[0] = this[0].firstElementChild;
      return dom;
    },
    last: function() {
      this[0] = this[0].lastElementChild;
      return dom;
    },
    animate: function(_this) {
      return this[0].animate(_this);
    },
    foreach: function(callback) {
      for (i=0;i<this.length;i++) {
        this[0] = this[i];
        callback(dom, i);
      }
      return dom;
    },
    contains: function(_this) {
      return this[0].contains(_this);
    },
    click: function(callback) {
      callback ? this.on("click", callback) : this[0].click();
      return dom;
    },
    focus: function(callback) {
      callback ? this.on("focus", callback) : this[0].focus();
      return dom;
    },
    blur: function (callback) {
       callback ? this.on("blur", callback) : this[0].blur();
       return dom;
    },
    submit: function(callback) {
      this.on("submit", callback);
      return dom;
    },
    clone: function() {
      this[0] = this[0].cloneNode();
      return dom;
    },
    appendTo: function(el) {
      el = typeof el == "object" ? el : document.querySelector(el);
      el.innerHTML += this.html();
      this.remove();
      return dom;
    },
    toggle: function() {
      this[0].style.display == "none" ? this.show() : this.hide();
      return dom;
    },
    width: function(newWidth) {
      return newWidth ? this.css("width", newWidth) : this[0].offsetWidth;
    },
    height: function(newHeight) {
      return newHeight ? this.css("height", newHeight) : this[0].offsetHeight;
    },
    left: function(newLeft) {
      return newLeft ? this.css("left", newLeft) : this[0].offsetLeft;
    },
    top: function(newTop) {
      return newTop ? this.css("top", newTop) : this[0].offsetTop;
    },
    name: function() {
      return this[0].localName;
    }
  };
  
  
  
  const normal = {
    jsonEncode: function(data) {
      try {
        return JSON.stringify(data);
      } catch (e) {
        return data;
      }
    },
    jsonDecode: function(text) {
      try {
        return JSON.parse(text);
      } catch (e) {
        return text;
      }
    },
    get: function(url, callback) {
      const xhr = new XMLHttpRequest();
      let res;
      xhr.open("GET", url, true);
      xhr.onreadystatechange = _ => {
        res = this.jsonDecode(xhr.response);
        if (callback) callback(res, xhr.statusText, xhr);
      }
      xhr.send();
      return httpHandler(xhr, res);
    },
    post: function(url, data, callback) {
      if (typeof data == "object") data = this.jsonEncode(data);
      const xhr = new XMLHttpRequest();
      let res;   
      xhr.open("POST", url, true);
      xhr.onreadystatechange = _ => {
        res = this.jsonDecode(xhr.response);
        if (callback) callback(res, xhr.statusText, xhr);
      }
      xhr.send(data);
      return httpHandler(xhr, res);     
    },
    getStorage: function(key) {
      return localStorage.getItem(key);
    },
    setStorage: function(key, val) {
      return localStorage.setItem(key, val);
    },
    remStorage: function(key) {
      return localStorage.removeItem(key);
    },
    clearStorage: function() {
      return localStorage.clear();
    },
    storage: function() {
      return {
        get: function(key) {
          return this.getStorage(key);
        },
        set: function(key, val) {
          return this.setStorage(key, val);
        },
        rem: function(key) {
          return this.remStorage(key);
        },
        clear: function() {
          return this.clearStorage();
        }
      };
    },
    getSession: function(key) {
      return sessionStorage.getItem(key);
    },
    setSession: function(key, val) {
      return sessionStorage.setItem(key, val);
    },
    remSession: function(key) {
      return sessionStorage.removeItem(key);
    },
    clearSession: function() {
      return sessionStorage.clear();
    },
    session: function() {
      return {
        get: function(key) {
          return this.getSession(key);
        },
        set: function(key, val) {
          return this.setSession(key, val);
        },
        rem: function(key) {
          return this.remSession(key);
        },
        clear: function() {
          return this.clearSession();
        }
      };
    },
    getCookie: function(name) {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for (i=0;i < ca.length;i++) {
          let c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    },
    setCookie: function(name, val = "", days, path = "/") {
      let expires = "";
      if (days) {
          const date = new Date();
          date.setTime(date.getTime() + (days*24*60*60*1000));
          expires = date.toUTCString();
      }
      document.cookie = `${name}=${val}; expires=${expires}; path=${path}`;
    },
    remCookie: function(name) {
      return document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    },
    cookie: function() {
      return {
        get: function(key) {
          return this.getCookie(key);
        },
        set: function(name, val, days, path) {
          return this.setCookie(name, val, days, path);
        },
        rem: function(key) {
          return this.remCookie();
        }
      };
    },
    ready: function(callback) {
      return document.addEventListener("DOMContentLoaded", callback);
    },
    reload: function() {
      return location.reload();
    }
  };
  
  
  function httpHandler(xhr, res) {
    const status = xhr.statusText;
    return {
      success: function(callback) {
        if (xhr.statusCode >= 300) return;
        callback(res, status, xhr);
        return httpHandler(xhr, res);
      },
      fail: function(callback) {
        if (xhr.status < 300 || xhr.status >= 500) return;
        callback(xhr, status, res);
        return httpHandler(xhr, res);
      },
      complete: function(callback) {
        if (xhr.readyState != 4) return;
        callback(res, status, xhr);
        return httpHandler(xhr, res);
      }
    };
  }
  

  
  if (typeof el == "function") {
    
    document.addEventListener("DOMContentLoaded", el);
    
  } else if (typeof el == "string") {

    el = document.querySelectorAll(el);
    for (i=0;i<el.length;i++) {
      dom[i] = el[i];
    }
    dom.length = el.length;
    res = dom;
    
  } else {
    
    res = normal;
  }
  
  
  return res;
};


