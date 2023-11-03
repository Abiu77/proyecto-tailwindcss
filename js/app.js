Vue.component('panel', {
  template: `
      <div class="panel mb-9">
          <div class="panel-title">
            <slot name="title"></slot>
          </div>
          <div class="panel-body">
            <slot name="body"></slot>
          </div>
      </div>
  `
});

new Vue({
  el: '#app'
})