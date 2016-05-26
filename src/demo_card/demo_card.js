import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './demo_card.less!';
import template from './demo_card.stache!';

export const ViewModel = Map.extend({
  define: {
    title: {
      value: 'demo-card component'
    }
  }
});

export default Component.extend({
  tag: 'demo-card',
  viewModel: ViewModel,
  template
});
