/*
* modules dependencies
*/
import gui            from 'nw.gui';
import OSMenu         from './components/utils/OSMenu';
import Platform       from './components/utils/Platform';
import OSNotification from './components/utils/OSNotification';


let win = gui.Window.get();


if(Platform.isOSX) {
  console.log("OSX")
} else if(Platform.isWindows) {
  console.log("Windows")
} else if(Platform.isLinux) {
  console.log("Linux")
} else {
  console.log("OS no reconocido")
}
win.show();

let notify = new OSNotification();
notify.show();
