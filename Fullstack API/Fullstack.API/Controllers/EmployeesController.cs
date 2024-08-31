using Fullstack.API.Data;
using Fullstack.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Fullstack.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]

    public class EmployeesController : Controller
    {
        private readonly FullstackDbContext _fullstackDbContext;
        public EmployeesController(FullstackDbContext fullstackDbContext)
        {
            _fullstackDbContext = fullstackDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees = await _fullstackDbContext.Employees.ToListAsync();

            return Ok(employees);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody]Employee employee)
        {
            employee.Id = Guid.NewGuid();
            await _fullstackDbContext.Employees.AddAsync(employee);
            await _fullstackDbContext.SaveChangesAsync();

            return Ok(employee);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetEmployee([FromRoute] Guid id)
        {
            var employee = await _fullstackDbContext.Employees.FirstOrDefaultAsync(x => x.Id == id);

            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid id, [FromBody]Employee updateEmployee)
        {
           var employee = await _fullstackDbContext.Employees.FindAsync(id);

            if(employee == null)
            {
                return NotFound();
            }

            employee.Name = updateEmployee.Name;
            employee.Email = updateEmployee.Email;
            employee.Phone = updateEmployee.Phone;
            employee.Salary = updateEmployee.Salary;
            employee.Department = updateEmployee.Department;

            await _fullstackDbContext.SaveChangesAsync(); 
            return Ok(employee);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid id)
        {
            var employee = await _fullstackDbContext.Employees.FindAsync(id);

            if(employee == null)
            {
                return NotFound();
            }

            _fullstackDbContext.Employees.Remove(employee);
            await _fullstackDbContext.SaveChangesAsync();

            return Ok();
        }
    }

}
