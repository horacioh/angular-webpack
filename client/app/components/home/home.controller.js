// create our controller using the
// highly controversial class
import _ from 'lodash';

class HomeController {
  // bind to this and not $scope
  // because of controllerAs.
  constructor() {
    this.title = 'Fumigadora Hamerlin!';
  }
}
// could also just export the class up top as well
export {HomeController};
