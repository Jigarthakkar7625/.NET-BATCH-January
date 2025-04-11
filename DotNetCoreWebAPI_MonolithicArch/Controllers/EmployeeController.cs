using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServicesLayer;

namespace DotNetCoreWebAPI_MonolithicArch.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _empService;
        private readonly IMapper _mapper;
        public EmployeeController(IEmployeeService empService, IMapper mapper)
        {
            _empService = empService;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("GetData")]
        public IActionResult GetData(AspNetUserDTO aspNetUserDTO)
        {
            // REquest >>> NO Database entity
            // Response >>> NO Database entity

            var getData = _empService.GetEmployeeData();

            List<AspNetUserDTO> users = _mapper.Map<List<AspNetUserDTO>>(getData);


            return Ok(users);
        }
    }
}
