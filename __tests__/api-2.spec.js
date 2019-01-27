import { createMockXHR } from '../__mock__/xhr';
import API from '../src/api';

describe('API integration test suite', function() {
  const oldXMLHttpRequest = window.XMLHttpRequest;
  let mockXHR = null;

  beforeEach(() => {
    mockXHR = createMockXHR();
    window.XMLHttpRequest = jest.fn(() => mockXHR);
  });

  afterEach(() => {
    window.XMLHttpRequest = oldXMLHttpRequest;
  });

  test('Should retrieve the list of posts from the server when calling getPosts method', function(done) {
    const reqPromise = API.getPosts();
    mockXHR.responseText = JSON.stringify([
      { title: 'test post' },
      { title: 'second test post' }
    ]);
    mockXHR.onreadystatechange();
    reqPromise.then((posts) => {
      expect(posts.length).toBe(2);
      expect(posts[0].title).toBe('test post');
      expect(posts[1].title).toBe('second test post');
      done();
    });
  });

  test('Should return a failed promise with the error message when the API returns an error', function(done) {
    const reqPromise = API.getPosts();
    mockXHR.responseText = JSON.stringify({
      error: 'Failed to GET posts'
    });
    mockXHR.onreadystatechange();
    reqPromise.catch((err) => {
      expect(err).toBe('Failed to GET posts');
      done();
    });
  });

});
