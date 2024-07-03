import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";

const placeholderTransactions = [
  { id: 1, date: new Date(), amount: 100, type: "income", brand: "Nike" },
  { id: 2, date: new Date(), amount: 200, type: "expense", brand: "Adidas" },
  { id: 3, date: new Date(), amount: 150, type: "income", brand: "Puma" },
];

const Index = () => {
  const [transactions, setTransactions] = useState(placeholderTransactions);

  const handleDelete = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Link to="/add">
              <Button>Add Transaction</Button>
            </Link>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{format(transaction.date, "yyyy-MM-dd")}</TableCell>
                  <TableCell>${transaction.amount}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.brand}</TableCell>
                  <TableCell>
                    <Link to={`/edit/${transaction.id}`}>
                      <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                    </Link>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(transaction.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;