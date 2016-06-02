import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './view_example.less!';
import template from './view_example.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the view-example component'
    }
  }
});

export default Component.extend({
  tag: 'view-example',
  viewModel: ViewModel,
  template
});