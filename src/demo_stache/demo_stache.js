import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './demo_stache.less!';
import template from './demo_stache.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the demo-stache component'
    }
  }
});

export default Component.extend({
  tag: 'demo-stache',
  viewModel: ViewModel,
  template
});