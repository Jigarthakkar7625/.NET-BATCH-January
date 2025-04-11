using DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServicesLayer
{
    public class EmployeeService : IEmployeeService
    {
        private readonly TestDbmajwtContext _testDbmajwtContext;

        public EmployeeService(TestDbmajwtContext testDbmajwtContext)
        {
            _testDbmajwtContext = testDbmajwtContext;
        }

        public List<AspNetUser> GetEmployeeData()
        {
            // Businesss logic
            return _testDbmajwtContext.AspNetUsers.ToList();
            //throw new NotImplementedException();
        }
    }
}
