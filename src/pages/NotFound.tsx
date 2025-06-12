import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Frown, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-yellow-200 to-amber-200 rounded-full opacity-40 animate-float delay-1000"></div>
      </div>
      
      <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-card border border-white/50 p-12 z-10 hover:shadow-glow transition-all duration-300">
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full flex items-center justify-center mb-6 animate-float">
          <Frown className="w-12 h-12 text-teal-500" />
        </div>
        <h1 className="text-5xl font-bold mb-4 font-jakarta bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">404</h1>
        <p className="text-xl text-slate-600 mb-6 font-outfit">Oops! This page couldn't be found 🔍</p>
        <Button 
          asChild
          className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 font-jakarta px-6 py-2"
        >
          <a href="/">
            <Home className="w-4 h-4 mr-2" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
