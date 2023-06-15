import React from 'react';

class PaymentForm extends React.Component {
  post = (path, params) => {
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (var key in params) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  };

  handleSubmit = (event) => {
    event.preventDefault();

    var path = "https://uat.esewa.com.np/epay/main";
    var params = {
      amt: event.target.elements.amt.value,
      psc: event.target.elements.psc.value,
      pdc: event.target.elements.pdc.value,
      txAmt: event.target.elements.txAmt.value,
      tAmt: event.target.elements.tAmt.value,
      pid: event.target.elements.pid.value,
      scd: event.target.elements.scd.value,
      su: event.target.elements.su.value,
      fu: event.target.elements.fu.value,
    };

    this.post(path, params);
  };

  render() {
    return (
      <div>
        <h1>Payment Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Amount:
            <input type="text" name="amt" />
          </label>
          <br />
          <label>
            PSC:
            <input type="text" name="psc" />
          </label>
          <br />
          <label>
            PDC:
            <input type="text" name="pdc" />
          </label>
          <br />
          <label>
            TxAmt:
            <input type="text" name="txAmt" />
          </label>
          <br />
          <label>
            TAmt:
            <input type="text" name="tAmt" />
          </label>
          <br />
          <label>
            PID:
            <input type="text" name="pid" />
          </label>
          <br />
          <label>
            SCD:
            <input type="text" name="scd" />
          </label>
          <br />
          <label>
            Success URL:
            <input type="text" name="su" />
          </label>
          <br />
          <label>
            Failure URL:
            <input type="text" name="fu" />
          </label>
          <br />
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    );
  }
}

export default PaymentForm;