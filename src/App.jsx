import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { List } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use sidebar layout
import Index from "./pages/Index.jsx";
import AddTransaction from "./pages/AddTransaction.jsx";
import EditTransaction from "./pages/EditTransaction.jsx";
import Gallery from "./pages/Gallery.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Transactions",
    to: "/",
    icon: <List className="h-4 w-4" />,
  },
  {
    title: "Gallery",
    to: "/gallery",
    icon: <List className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="add" element={<AddTransaction />} />
              <Route path="edit/:id" element={<EditTransaction />} />
              <Route path="gallery" element={<Gallery />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;