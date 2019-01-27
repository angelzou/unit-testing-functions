const API_ROOT = 'http://jsonplaceholder.typicode.com';
class API {
  getPosts() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `${API_ROOT}/posts`);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          const resp = JSON.parse(xhr.responseText);
          if (resp.error) {
            reject(resp.error);
          } else {
            resolve(resp);
          }
        }
      }
      xhr.send();
    })
  }
}

export default new API();