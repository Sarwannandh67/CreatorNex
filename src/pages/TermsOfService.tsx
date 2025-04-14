import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/90 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing and using CreatorNex's website and services, you agree to be bound by these Terms of Service.
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2>2. Services</h2>
              <p>
                CreatorNex provides digital marketing, web development, and creative services. We reserve the right
                to withdraw or amend our services without notice. We will not be liable if any part of our services
                becomes unavailable.
              </p>
            </section>

            <section className="mb-8">
              <h2>3. Intellectual Property</h2>
              <p>
                The content on our website, including text, graphics, logos, images, and software, is the property
                of CreatorNex and is protected by intellectual property laws. You may not use our intellectual
                property without our prior written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2>4. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Not use our services for any illegal purposes</li>
                <li>Not violate any applicable laws or regulations</li>
                <li>Not infringe on others' intellectual property rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>5. Payment Terms</h2>
              <p>
                Payment terms will be specified in individual service agreements. All fees are non-refundable
                unless otherwise stated in writing. We reserve the right to modify our pricing with notice.
              </p>
            </section>

            <section className="mb-8">
              <h2>6. Limitation of Liability</h2>
              <p>
                CreatorNex shall not be liable for any indirect, incidental, special, consequential, or punitive
                damages resulting from your use or inability to use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2>7. Termination</h2>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice, for
                any reason, including breach of these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2>8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material
                changes by posting the new Terms of Service on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2>9. Contact Information</h2>
              <p>
                For any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:legal@creatornex.com" className="text-primary hover:text-primary/90">
                  legal@creatornex.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 