class MyRouter {
  constructor(){
    this._router;
  }


  static matchHash (curentUrl, targetUrl) {
    const curentUrlParts = curentUrl.split(/\//g);
    const targetUrlParts = targetUrl.split(/\//g);

    if (targetUrlParts.length !== curentUrlParts.length) {
      return false;
    }

    const params = {};

    const len = curentUrlParts.length;
    for (let i = 0; i < len; i+=1) {

      if (targetUrlParts[i][0] !== ':') {
        if (curentUrlParts[i] !== targetUrlParts[i]) {
          return false;
        }
      }
      else {
        const paramName = targetUrlParts[i].slice(1);
        param[paramName] = curentUrlParts[i];
      }
      return params;
    }
  }
}

export { MyRouter };