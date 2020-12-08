export default function() {

  this.namespace = 'api';

  this.get('/form-blueprints/:id');
  this.patch('/form-blueprints/:id');

  /*
    Shorthand cheatsheet:

    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
