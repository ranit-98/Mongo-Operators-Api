const Employee = require('../models/Employee');
const Inventory = require('../models/Inventory');
const Payment = require('../models/Payment');
const Promo = require('../models/Promo');

//--------------------------------------------------------------------------------------
//                          DATA MANAGEMENT CONTROLLER
//--------------------------------------------------------------------------------------

class DataController {

  //--------------------------------------------------------------------------------------
  //                          SEED DATABASE WITH SAMPLE DATA
  //--------------------------------------------------------------------------------------
  static async seedDatabase(req, res) {
    try {
      // Clear existing data
      await Employee.deleteMany({});
      await Inventory.deleteMany({});
      await Payment.deleteMany({});
      await Promo.deleteMany({});

      // Seed employees
      const employees = [
        { _id: "EMP001", emp_name: "John Doe", job_role: "Store Associate", emp_age: 25, salary: 30000, department: "Sales" },
        { _id: "EMP002", emp_name: "Jane Smith", job_role: "Senior Cashier", emp_age: 32, salary: 35000, department: "Checkout" },
        { _id: "EMP003", emp_name: "Mike Johnson", job_role: "Store Manager", emp_age: 45, salary: 60000, department: "Management" },
        { _id: "EMP004", emp_name: "Sarah Wilson", job_role: "Store Associate", emp_age: 28, salary: 32000, department: "Sales" },
        { _id: "EMP005", emp_name: "David Brown", job_role: "Cashier", emp_age: 22, salary: 28000, department: "Checkout" },
        { _id: "EMP006", emp_name: "Lisa Garcia", job_role: "Senior Cashier", emp_age: 35, salary: 37000, department: "Checkout" }
      ];

      // Seed inventory
      const inventory = [
        { _id: "LS0009100", name: "Milk Non-Fat - 1lt", quantity: 1000, price: 3.59, category: ["dairy", "healthy"], supplier: "DairyFarm Co" },
        { _id: "LS0009101", name: "Bread Whole Wheat", quantity: 500, price: 2.99, category: ["bakery", "healthy"], supplier: "Fresh Bakery" },
        { _id: "LS0009102", name: "Eggs Organic - 12 pack", quantity: 300, price: 5.23, category: ["dairy", "organic", "healthy"], supplier: "Organic Farms" },
        { _id: "LS0009103", name: "Apples Red - 1kg Packed", quantity: 15000, price: 4.95, category: ["fruits", "healthy", "organic"], supplier: "Fresh Fruits Ltd" },
        { _id: "LS0009104", name: "Rice Basmati - 2kg Packed", quantity: 8000, price: 6.99, category: ["grains", "pantry"], supplier: "Grain Masters" },
        { _id: "LS0009105", name: "Chicken Breast - 1kg", quantity: 200, price: 12.99, category: ["meat", "protein"], supplier: "Meat Co" },
        { _id: "LS0009106", name: "Yogurt Greek - 500g", quantity: 600, price: 3.00, category: ["dairy", "healthy"], supplier: "DairyFarm Co" }
      ];

      // Seed payments
      const payments = [
        { _id: "PAY001", amount: 45.67, payment_method: "Credit Card", transaction_date: new Date("2023-10-01"), customer_id: "CUST001" },
        { _id: "PAY002", amount: 23.45, payment_method: "Cash", transaction_date: new Date("2023-10-02"), customer_id: "CUST002" },
        { _id: "PAY003", amount: 78.90, payment_method: "Debit Card", transaction_date: new Date("2023-10-03"), customer_id: "CUST003" },
        { _id: "PAY004", amount: 156.78, payment_method: "Credit Card", transaction_date: new Date("2023-10-04"), customer_id: "CUST004" }
      ];

      // Seed promos
      const promos = [
        { _id: "PROMO001", name: "Weekend Special", period: 7, daily_sales: [120, 150, 180, 200, 175, 190, 210], discount_percentage: 15, active: true },
        { _id: "PROMO002", name: "Monthly Mega Sale", period: 30, daily_sales: [300, 320, 280, 350, 400, 380, 420], discount_percentage: 25, active: true },
        { _id: "PROMO003", name: "Flash Sale", period: 3, daily_sales: [500, 600, 550], discount_percentage: 30, active: false },
        { _id: "PROMO004", name: "Holiday Special", period: 14, daily_sales: [250, 280, 300, 320, 290, 310, 340, 360, 380, 400, 420, 450, 480, 500], discount_percentage: 20, active: true }
      ];

      // Insert data
      await Employee.insertMany(employees);
      await Inventory.insertMany(inventory);
      await Payment.insertMany(payments);
      await Promo.insertMany(promos);

      res.json({
        success: true,
        message: 'Database seeded successfully',
        data: {
          employees: employees.length,
          inventory: inventory.length,
          payments: payments.length,
          promos: promos.length
        }
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }
  }

  //--------------------------------------------------------------------------------------
  //                          GET ALL DATA FROM COLLECTIONS
  //--------------------------------------------------------------------------------------
  static async getAllData(req, res) {
    try {
      const employees = await Employee.find({});
      const inventory = await Inventory.find({});
      const payments = await Payment.find({});
      const promos = await Promo.find({});

      res.json({
        success: true,
        data: {
          employees: {
            count: employees.length,
            data: employees
          },
          inventory: {
            count: inventory.length,
            data: inventory
          },
          payments: {
            count: payments.length,
            data: payments
          },
          promos: {
            count: promos.length,
            data: promos
          }
        }
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }
  }

  //--------------------------------------------------------------------------------------
  //                          CLEAR ALL DATA
  //--------------------------------------------------------------------------------------
  static async clearAllData(req, res) {
    try {
      await Employee.deleteMany({});
      await Inventory.deleteMany({});
      await Payment.deleteMany({});
      await Promo.deleteMany({});

      res.json({
        success: true,
        message: 'All data cleared successfully'
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }
  }
}

module.exports = DataController;
