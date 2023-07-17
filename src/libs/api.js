import Axios from 'axios';
import * as qs from 'qs';

class ApiFactory {
  url = 'http://localhost:5001';

  client = Axios.create();

  /**
   *
   * @param path String eg "users/1"
   * @param data Record<string, string> eg {foo: 'bar'}
   */
  async get(path, data) {
    let q = '';

    const queryString = qs.stringify(data, { arrayFormat: 'repeat' });
    if (queryString) {
      q += `?${queryString}`;
    }

    const res = await this.client({
      method: 'GET',
      url: `${this.url}/${path}${q}`,
    });
    return res.data;
  }

  async post(path, data) {
    const res = await this.client({
      method: 'POST',
      url: `${this.url}/${path}`,
      data,
    });
    return res.data;
  }

  async put(path, data) {
    const res = await this.client({
      method: 'PUT',
      url: `${this.url}/${path}`,
      data,
    });
    return res.data;
  }

  async patch(path, data) {
    const res = await this.client({
      method: 'PATCH',
      url: `${this.url}/${path}`,
      data,
    });
    return res.data;
  }

  async delete(path) {
    const res = await this.client({
      method: 'DELETE',
      url: `${this.url}/${path}`,
    });
    return res.data;
  }
}

export const API = new ApiFactory();
