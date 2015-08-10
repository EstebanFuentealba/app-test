import gui from 'nw.gui';


let win = gui.Window.get();


var tray = new gui.Tray({
  icon: './assets/img/icon175x175.png',
  'tooltip': 'BioBioChile Escritorio'
});
tray.on('click', function() {
  win.show();
});


var menu = new gui.Menu();
  menu.append(new gui.MenuItem({
    label: 'Abrir Noticias',
    click: function() {
      win.show();
    }
  }));
  menu.append(new gui.MenuItem({
    label: 'Cerrar Aplicación',
    click: function() {
      win.close(true);
    }
  }));

tray.menu = menu;
// keep the object in memory
win.tray = tray;
