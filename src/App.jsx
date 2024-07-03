import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, List } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use sidebar layout
import Index from "./pages/Index.jsx";
import AddTransaction from "./pages/AddTransaction.jsx";
import EditTransaction from "./pages/EditTransaction.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Transactions", // Updated title
    to: "/",
    icon: <List className="h-4 w-4" />, // Updated icon
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
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
