import Notify from 'nw-notify';

export default class OSNotification {
  constructor() {
    Notify.setConfig({
        appIcon: Notify.getAppPath() + 'assets/img/icon175x175.png',
        displayTime: 30000,
        onClickFunc: function() { console.log('onCLick'); },
        onShowFunc: function() { console.log('onShow') },
        onCloseFunc: function() { console.log('onClose')}
    });
  }
  show(){
    Notify.notify({
      title: 'Title',
      text: 'Some text',
      image: 'http://media.biobiochile.cl/wp-content/uploads/portada/home/2335737-tocopilla-730x350.jpg'
    });
  }
}
