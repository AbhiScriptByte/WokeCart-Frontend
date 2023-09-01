import React from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const PrivacyPolicyPage = () => {
    return(
        <>
        <Navbar/>
        <div>
        <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-6">
        WokeCart respects the privacy concerns of the users of this Service
        and have created this privacy policy to explain how we receive and use
        information.
      </p>

      <h4 className="text-xl font-bold mb-3">Principles for Processing Personal Information</h4>

      <ul className="list-disc list-inside mb-6">
        <li className="mb-2">
          Data will be processed fairly and in accordance with applicable law.
        </li>
        <li className="mb-2">
          Data will be collected for specified, legitimate purposes and not processed
          further in ways incompatible with those purposes.
        </li>
        {/* Add other list items using similar classes */}
      </ul>

      <h4 className="text-xl font-bold mb-3">Service Providers</h4>

      <p className="mb-6">
        We may employ third party companies to provide customer support, perform
        Website-related services (e.g., without limitation, maintenance services,
        database management, web analytics and improvement of the Website's features)
        or to assist us in analyzing how our Service is used. These third parties may
        have access to your personal information to the extent required to perform
        these tasks on our behalf and are obligated not to disclose or use it for any
        other purpose.
      </p>

      <h4 className="text-xl font-bold mb-3">Children</h4>

      <p className="mb-6">
        Children under 13 are not allowed to use WokeCart. If you are based in the
        EEA you may only use WokeCart if you are over the age at which you can
        provide consent to data processing under the laws of your country.
      </p>

      <h4 className="text-xl font-bold mb-3">Links to other websites</h4>

      <p>
        We do not endorse and are not responsible for the content or practices of web
        sites that may be linked to by WokeCart. You should not assume that their
        privacy policies or practices are the same as those followed by WokeCart
        Visitors to any such web sites should refer to their respective privacy
        policies and practices&hellip;
      </p>
    </div>
        
        </div>
        <Footer/>
        </> 
    )
}

export default PrivacyPolicyPage;