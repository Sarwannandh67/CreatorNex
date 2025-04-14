import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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

          <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2>Introduction</h2>
              <p>
                At CreatorNex, we take your privacy seriously. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2>Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide, including:</p>
              <ul>
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business information</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>When you visit our website, we automatically collect:</p>
              <ul>
                <li>Device information</li>
                <li>Log and usage data</li>
                <li>Location data</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and maintain our services</li>
                <li>Improve our website and services</li>
                <li>Communicate with you</li>
                <li>Send marketing and promotional materials</li>
                <li>Analyze usage patterns</li>
                <li>Protect against fraud and unauthorized access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>Information Sharing</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Service providers and business partners</li>
                <li>Legal authorities when required by law</li>
                <li>Other parties with your consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@creatornex.com" className="text-primary hover:text-primary/90">
                  privacy@creatornex.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2>Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by
                an updated "Last Updated" date and the updated version will be effective as soon as it is
                accessible.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 