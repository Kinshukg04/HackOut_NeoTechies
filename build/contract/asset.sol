pragma solidity ^0.5.0;

contract asset {

    address public creatorAdmin;
	enum Status { NotExist, Pending, Approved, Rejected }

	struct PropertyDetail {
		Status status;
		uint value;
		address currOwner;
	}

	// Dictionary of all the properties, mapped using their { propertyId: PropertyDetail } pair.
	mapping(uint => PropertyDetail) public properties;
	mapping(uint => address) public propOwnerChange;

    mapping(address => int) public users;
    mapping(address => bool) public verifiedUsers;

	modifier onlyOwner(uint _propId) {
		require(properties[_propId].currOwner == msg.sender);
		_;
	}

	modifier verifiedUser(address _user) {
	    require(verifiedUsers[_user]);
	    _;
	}
    // Initializing the User Contract.
     constructor  ()  public {
		creatorAdmin = msg.sender;
		users[creatorAdmin] = 3;
		verifiedUsers[creatorAdmin] = true;
	}

	// Create a new Property.
 function createProperty(uint _propId, uint _value, address _owner) verifiedAdmin verifiedUser(_owner) public returns (bool)  {
		properties[_propId] = PropertyDetail(Status.Pending, _value, _owner);
		return true;
	}

		// Get the property details.
	 function getPropertyDetails(uint _propId) view public returns (Status, uint, address)  {
		return (properties[_propId].status, properties[_propId].value, properties[_propId].currOwner);
	}
}