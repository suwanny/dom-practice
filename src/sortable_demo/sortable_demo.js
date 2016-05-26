import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './sortable_demo.less!';
import template from './sortable_demo.stache!';
import Sortable from 'sortablejs';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the demo-sortable component'
    }
  }
});

export default Component.extend({
  tag: 'demo-sortable',
  viewModel: ViewModel,
  template,
  events: {
    inserted: function() {
      let sortableContainer = document.getElementById('sortablePanels');
      this.sortable = Sortable.create(sortableContainer, {
        group: "sortablePanel-example",
        handle: ".header",
        store: {
          get: function (sortable) {
            let group = sortable.options.group;
            let order = localStorage.getItem(group);
            return order ? order.split('|') : [];
          },
          set: function (sortable) {
            let group = sortable.options.group;
            let order = sortable.toArray();
            localStorage.setItem(group, order.join('|'));
          }
        },
        onSort: function (/**Event*/evt) {
          console.log('onSort', evt);
        }
      });
    }
  }
});
