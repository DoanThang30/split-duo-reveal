
import { Heart, Calendar, MapPin, Users, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-slate-800 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-red-400 transition-colors">Home</a>
              <a href="#" className="hover:text-red-400 transition-colors">About Us</a>
              <a href="#" className="hover:text-red-400 transition-colors">Find Blood</a>
              <div className="relative group">
                <a href="#" className="hover:text-red-400 transition-colors">Register Now ▼</a>
              </div>
            </div>
          </div>
          <Button variant="outline" className="bg-white text-slate-800 hover:bg-gray-100">
            Log In
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
      }}>
        <div className="container mx-auto h-full flex items-center px-6">
          <div className="text-white max-w-2xl">
            <h1 className="text-6xl font-bold mb-4">
              EVERY<br />
              <span className="text-red-500">DROP</span><br />
              COUNTS
            </h1>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
              Donate Now
            </Button>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Promote the importance of donating blood.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Allow anyone to easily register as donors.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Share general information about blood types, eligibility, donation process, and benefits.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Securely store the donors information for admin and staff.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Should Donate Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why You Should Donate</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">With a simple donation, you can help up to 3 people</h3>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">You can get a free medical check-up</h3>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">You can make a difference in your community</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Donate Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">How to donate blood ?</h2>
          
          <div className="relative">
            {/* Heart and ECG line decoration */}
            <div className="flex items-center justify-center mb-12">
              <div className="flex-1 h-0.5 bg-red-500"></div>
              <div className="mx-8">
                <svg viewBox="0 0 100 20" className="w-32 h-8 text-red-500">
                  <path d="M0,10 L20,10 L25,5 L30,15 L35,5 L40,15 L45,10 L100,10" 
                        stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <Heart className="w-12 h-12 text-red-500 fill-red-500 mx-4" />
              <div className="mx-8">
                <svg viewBox="0 0 100 20" className="w-32 h-8 text-red-500">
                  <path d="M0,10 L20,10 L25,5 L30,15 L35,5 L40,15 L45,10 L100,10" 
                        stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="flex-1 h-0.5 bg-red-500"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-500" />
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Finish a donor registration</p>
                  <p>from staff personnel and health</p>
                  <p>screening form from nurse.</p>
                  <p>• Make sure you're eligible to</p>
                  <p>donate.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-blue-500" />
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Choose a donation center or</p>
                  <p>blood drive location.</p>
                  <p>• Get a blood card, set a healthy</p>
                  <p>snack and enjoy humanitarian</p>
                  <p>feeling.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-500" />
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Visit the donation center on</p>
                  <p>your appointment.</p>
                  <p>• Complete the donation, then</p>
                  <p>rest for a few minutes, take a</p>
                  <p>snack.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-4">Ready to get started?</p>
              <Button className="bg-red-600 hover:bg-red-700">
                Donate
              </Button>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Our story</a></li>
                <li><a href="#" className="hover:text-white">Benefits</a></li>
                <li><a href="#" className="hover:text-white">Team</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Help</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contact us</a></li>
              </ul>
            </div>
            
            <div>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.739.099.120.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.757-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 flex justify-between items-center text-sm text-gray-400">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white">Terms & Conditions</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
