using System.ComponentModel.DataAnnotations;

namespace Fullstack.API.Models
{
    public class Employee
    {
        [Required]
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public long Phone { get; set; }
        public long Salary { get; set; }
        public string Department { get; set; } = string.Empty;
    }
}
