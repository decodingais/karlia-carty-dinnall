import React from 'react';

export default function Page() {
    return  <div className="container mx-auto w-4/6 text-accent-grey text-md">
                <h4 className='text-gold text-lg'>Divorce</h4>

                <div className='py-2'>The divorce process typically unfolds in three distinct stages:</div>

                <div className='py-2'><b>Petition Filing:</b> The process commences with the filing of a petition in court. Once signed and stamped by the court, the petition is returned to the attorney. It is imperative that the petition is personally served on the spouse, regardless of their location. Proof of service, typically in the form of an affidavit, must then be provided to the court.</div>

                <div className='py-2'><b>Decree Nisi Application:</b> Following the preparation of proof of service, an application for Decree Nisi is submitted to the court. In certain cases, the court may require service of these documents on the spouse as well. This stage concludes when the court is satisfied with the accuracy of all information provided. Subsequently, the Decree Nisi is signed, stamped, and returned to the attorney.</div>

                <div className='py-2'><b>Decree Absolute Application:</b> Approximately six weeks after the grant of Decree Nisi, an application for Decree Absolute is made. Once again, these documents are filed in court, and may also need to be served on the spouse. Upon the court's confirmation of the documents' accuracy, a Judge signs the Decree Absolute, which is then stamped and returned to the attorney. This marks the completion of the divorce process.</div>
            </div>
}