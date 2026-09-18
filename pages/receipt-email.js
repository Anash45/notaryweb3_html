import Head from "next/head";

const emailStyles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,700&display=swap');

            /* CSS styles for the email receipt template */
            * {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
            }

            table,
            td,
            th {
                border-collapse: collapse;
            }

            body {
                font-family: 'Poppins', sans-serif;
                line-height: 1.6;
                color: #000;
                font-size: 14px;
            }

            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #fff;
            }

            .times {
                font-family: 'Times New Roman', Times, serif;
            }

            .r-head,
            .r-foot {
                background-color: #4B3D1B;
                padding: 15px;
                color: #fff;
            }
            .r-head *,
            .r-foot * {
                color: #ffffff;
            }
            .h-top h2 {
                font-weight: 400;
                font-size: 1.75rem;
            }

            table {
                width: 100%;
                vertical-align: top;
            }

            .right {
                text-align: right;
            }

            .left {
                text-align: left;
            }

            .center {
                text-align: center;
            }

            a {
                text-decoration: none;
                color: inherit;
            }

            .contact-table {
                margin-top: 20px;
            }

            .date-table {
                max-width: fit-content;
                margin: 0 auto;
            }

            .date-table td {
                padding: 5px 10px;
                font-size: 0.9rem;
            }

            .contact {
                padding: 8px 0;
                font-size: 12px;
                width: 50%;
                /* vertical-align: middle; */
            }

            .contact span {
                padding-left: 5px;
                display: inline-block;
            }

            .info-table {
                margin-bottom: 50px;
            }

            .info-table td {
                padding: 10px 20px;
            }

            .names {
                padding-top: 20px;
                font-weight: 700;
                line-height: 34px;
            }

            .names.customer {
                font-size: 24px;
            }

            .names.company {
                font-size: 20px;
                color: #4B3D1B;
            }

            .r-address {
                font-size: 14px;
                color: #686868;
            }

            .customer-info,
            .company-info {
                width: 50%;
            }

            .receipt-table th,
            .receipt-table td {
                padding: 10px 20px;
            }

            .receipt-table .prices {
                max-width: fit-content;
            }

            .d-name {
                width: 100%;
            }

            .receipt-table thead th {
                border-bottom: 2px solid #dee2e6;
            }

            .text-light {
                color: #686868;
            }

            .receipt-table tbody {
                font-size: 14px;
            }

            .receipt-table tbody tr:last-child>td {
                border-bottom: 2px solid #dee2e6;
            }

            .info {
                color: #000;
                margin-bottom: 20px;
            }

            p.info {
                font-size: 14px;
                margin-bottom: 0;
            }

            .nowrap {
                white-space: nowrap;
                vertical-align: text-top;
            }

            .total-table {
                border-top: 1px solid #000;
            }

            .total-table td {
                border-bottom: none !important;
            }
            .r-foot .text-light{
                color: #dee2e6;
            }
`;

export default function ReceiptEmail() {
  return (
    <>
      <Head>
        <title>Email Receipt</title>
        <style dangerouslySetInnerHTML={{ __html: emailStyles }} />
      </Head>
      <div className="container">
        <div className="r-head">
          <table className="h-top">
            <tbody>
              <tr>
                <td>
                  <img src="/img/logo-w.png" alt="Logo" height={30} />
                </td>
                <td className="right">
                  <h2 className="times">Receipt</h2>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="contact-table">
            <tbody>
              <tr>
                <td className="center contact">
                  <a href="mailto:support@notaryweb3.com">
                    <img height={13} src="/img/email.png" alt="Icon" />
                    <span>support@notaryweb3.com</span>
                  </a>
                </td>
                <td className="center contact">
                  <a href="tel:+1 800 535 4472">
                    <img height={13} src="/img/call.png" alt="Icon" />
                    <span>+1 800 535 4472</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="date-table">
            <tbody>
              <tr>
                <td>Receipt #:</td>
                <td>220122</td>
              </tr>
              <tr>
                <td>Date:</td>
                <td>02/12/23</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="r-body">
          <table className="info-table">
            <tbody>
              <tr>
                <td className="left customer-info">
                  <h4>Invoice to:</h4>
                  <h2 className="names customer">Jorden Smith</h2>
                  <p className="r-address">
                    {" "}
                    Toronto Ontario <br /> Toronto Ontario <br /> Canada{" "}
                  </p>
                </td>
                <td className="right company-info">
                  <h4>Paid to:</h4>
                  <h2 className="names company">Notary Ventures, LLC</h2>
                  <p className="r-address">
                    {" "}
                    Notary Ventures, LLC <br /> Notary Ventures, LLC <br />{" "}
                    United States{" "}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="receipt-table">
            <thead className="left">
              <tr>
                <th className="d-name">Domain Name</th>
                <th className="prices">Total</th>
                <th className="prices">Price</th>
              </tr>
            </thead>
            <tbody className="text-light">
              <tr>
                <td>Tonymills.notary</td>
                <td>$49.99</td>
                <td>$49.99</td>
              </tr>
              <tr>
                <td>Tonymills.notary</td>
                <td>$49.99</td>
                <td>$49.99</td>
              </tr>
              <tr>
                <td>Tonymills.notary</td>
                <td>$49.99</td>
                <td>$49.99</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td rowSpan={2}>
                  <h4 className="info">Additional Information:</h4>
                  <p className="info">
                    Your purchase will appear on your credit card statement as:
                    Notary Ventures or Notaryweb3.com
                  </p>
                </td>
                <td className="text-light nowrap"> Subtotal </td>
                <td className="text-light nowrap"> $99.98 </td>
              </tr>
              <tr>
                <td className="text-light nowrap"> Tax (18%) </td>
                <td className="text-light nowrap"> $99.98 </td>
              </tr>
              <tr>
                <td />
                <td colSpan={2}>
                  <table className="total-table">
                    <tbody>
                      <tr>
                        <th className="nowrap">Grand Total</th>
                        <td className="nowrap">$967.98</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="r-foot center">
          <p>
            <b>Note: </b>
            <span className="text-light">
              {" "}
              this is computer generated receipt and does not require physical
              signature.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
