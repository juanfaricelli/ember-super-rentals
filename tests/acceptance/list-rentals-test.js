import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

// test('visiting /', function(assert) {
//   visit('/');
//
//   andThen(function() {
//     assert.equal(currentURL(), '/');
//   });
// });
test('should show rentals as the home page', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/rentals', 'should redirect automatically')
  });
});

test('should link to information about the company.', function (assert) {
  visit('/');
  andThen(() => {
    assert.equal(find('.btn-about').length, 1, 'should see "about" link button');
  });
  click('.btn-about');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should be at "about" page');
  });
});

test('should link to contact information.', function (assert) {
  visit('/');
  andThen(() => {
    assert.equal(find('.btn-contact').length, 1, 'should see "contact" link button');
  });
  click('.btn-contact');
  andThen(function() {
    assert.equal(currentURL(), '/contact', 'should be at "contact" page');
  });
});

test('should list available rentals.', function (assert) {
  visit('/');
  andThen(() => {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});

test('should filter the list of rentals by city.', function (assert) {
});

test('should show details for a selected rental', function (assert) {
});