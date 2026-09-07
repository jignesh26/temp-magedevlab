export default function TermsPage() {
  return (
    <div className="w-full bg-background min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Terms and Conditions</h1>
        <div className="prose prose-invert prose-blue max-w-none text-gray-400">
          <p className="mb-4"><em>Last updated</em>: January 06, 2023</p>
          <p className="mb-6">Please read these terms and conditions carefully before using Our Service.</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Interpretation and Definitions</h2>
          <h3 className="text-xl font-semibold text-gray-200 mt-8 mb-4">Interpretation</h3>
          <p className="mb-6">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
          
          <h3 className="text-xl font-semibold text-gray-200 mt-8 mb-4">Definitions</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party.</li>
            <li><strong>Country</strong> refers to: California, United States</li>
            <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to magedevlab.</li>
            <li><strong>Service</strong> refers to the Website.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Contact Us</h2>
          <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>By email: connect@magedevlab.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
