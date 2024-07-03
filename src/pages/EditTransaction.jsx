import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";

const placeholderTransactions = [
  { id: 1, date: new Date(), amount: 100, type: "income", brand: "Nike" },
  { id: 2, date: new Date(), amount: 200, type: "expense", brand: "Adidas" },
  { id: 3, date: new Date(), amount: 150, type: "income", brand: "Puma" },
];

const EditTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const transaction = placeholderTransactions.find((t) => t.id === parseInt(id));
  const [date, setDate] = useState(format(transaction.date, "yyyy-MM-dd"));
  const [amount, setAmount] = useState(transaction.amount);
  const [type, setType] = useState(transaction.type);
  const [brand, setBrand] = useState(transaction.brand);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update transaction logic here
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Edit Transaction</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="mb-4">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div className="mb-4">
              <Label htmlFor="type">Type</Label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="income">Income</SelectItem>
                  <SelectItem value="expense">Expense</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4">
              <Label htmlFor="brand">Brand</Label>
              <Select value={brand} onValueChange={setBrand}>
                <SelectTrigger>
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Nike">Nike</SelectItem>
                  <SelectItem value="Adidas">Adidas</SelectItem>
                  <SelectItem value="Puma">Puma</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-between">
              <Button type="submit">Save Changes</Button>
              <Button variant="outline" onClick={() => navigate("/")}>Cancel</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditTransaction;