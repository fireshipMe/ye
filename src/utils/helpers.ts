// eslint-disable-next-line import/prefer-default-export
export function debounce<T extends Function>(cb: T, wait = 20) {
  let h = 0;
  const callable = (...args: any) => {
    clearTimeout(h);
    h = setTimeout(() => cb(...args), wait);
  };
  return <T>(<any>callable);
}
