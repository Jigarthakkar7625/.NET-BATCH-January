using AutoMapper;
using DataAccessLayer;

namespace DotNetCoreWebAPI_MonolithicArch
{
    public class AspNetUserProfiler : Profile
    {
        public AspNetUserProfiler()
        {
            //Outgoing
            CreateMap<AspNetUserDTO, AspNetUser>();

            //Incoming
            CreateMap<AspNetUser, AspNetUserDTO>();
        }



    }
}
