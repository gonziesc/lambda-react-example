import apisauce from 'apisauce';

const api = apisauce.create({
  baseURL: 'http://fakeapi.com/',
});

export const survey = params => api.post('/survey', params);