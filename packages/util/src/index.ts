export const isDefined = <T>(value: T | undefined | undefined) => value != null;

export const fetchJson = (requestInfo: RequestInfo, init: RequestInit = {}) =>
  fetch(requestInfo, {
    headers: {
      Accept: 'application/json',
    },
    ...init,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(`Fail to fetch`);
  });
