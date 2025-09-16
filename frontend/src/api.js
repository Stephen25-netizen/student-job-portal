const API = '/api';

export function getToken() {
  return localStorage.getItem('token');
}

export function setToken(t) {
  localStorage.setItem('token', t);
}

export async function api(path, { method='GET', body, auth=false } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (auth && getToken()) headers['Authorization'] = 'Bearer ' + getToken();
  const res = await fetch(API + path, { method, headers, body: body ? JSON.stringify(body) : undefined });
  if (!res.ok) {
    let msg = 'Request failed';
    try { const j = await res.json(); msg = j.error || msg; } catch {}
    throw new Error(msg);
  }
  return res.json();
}

