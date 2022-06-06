using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    // V159: this service gets User loggedin anywhere 
    public interface IUserAccessor
    {
        string GetUsername();

    }
}