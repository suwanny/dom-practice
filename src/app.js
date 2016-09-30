import can from "can/";
import Map from "can/map/";
import route from "can/route/";
import 'can/map/define/';
import 'can/route/pushstate/';

const AppViewModel = Map.extend({
  define: {
    message: {
      value: 'Hello World!',
      serialize: false
    },
    title: {
      value: 'dom-practice',
      serialize: false
    }
  }
});

route('/:page', { page: 'home' });

export default AppViewModel;
