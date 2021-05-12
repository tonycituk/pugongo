var express = require('express');
var router = express.Router();
var tabs = [
  {
    name: 'Home',
    icon: 'fa-home',
    url: '/',
    active: false
  },
  {
    name: 'Create',
    icon: 'fa-plus-square',
    url: 'create',
    active: false
  },
  {
    name: 'Read',
    icon: 'fa-eye',
    url: 'read',
    active: false
  },
  {
    name: 'Update',
    icon: 'fa-edit',
    url: 'update',
    active: false
  },
  {
    name: 'Delete',
    icon: 'fa-trash-alt',
    url: 'delete',
    active: false
  }
]

/* GET home page. */
router.get('/', function (req, res, next) {
  tabs[0].active = true;
  res.render('index', { title: 'PUGONGO', tabs });
  clearTabs();
});

/* GET CREATE page. */
router.get('/create', function (req, res, next) {
  tabs[1].active = true;
  res.render('create', { title: 'PUGONGO: Create '+randomEmoji(), tabs });
  clearTabs();
});

/* GET READ page. */
router.get('/read', function (req, res, next) {
  tabs[2].active = true;
  res.render('read', { title: 'PUGONGO: Read '+randomEmoji(), tabs });
  clearTabs();
});

/* GET UPDATE page. */
router.get('/update', function (req, res, next) {
  tabs[3].active = true;
  res.render('update', { title: 'PUGONGO: Update '+randomEmoji(), tabs });
  clearTabs();
});

/* GET DELETE page. */
router.get('/delete', function (req, res, next) {
  tabs[4].active = true;
  res.render('delete', { title: 'PUGONGO: Delete '+randomEmoji(), tabs });
  clearTabs();
});


function clearTabs() {
  tabs.forEach(tab => {
    tab.active = false;
  });
  console.log(tabs);
}
function randomEmoji() {
  emojis = ['🖥️', '🕹️', '👩‍💻', '👨‍💻', '📁', '🤖', '🐒', '🐕'];
  rEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  return rEmoji;
}


module.exports = router;
