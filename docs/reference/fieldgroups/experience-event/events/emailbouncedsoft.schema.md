
# Email Bounced Soft Schema

```
https://ns.adobe.com/xdm/mixins/events/emailbouncedsoft
```

Use to capture details when a marketing email to person soft-bounces.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/events/emailbouncedsoft.schema.json](fieldgroups/experience-event/events/emailbouncedsoft.schema.json) |

## Email Bounced Soft Example
```json
{}
```

# Email Bounced Soft Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:directMarketing](#xdmdirectmarketing) | `object` | Optional | Email Bounced Soft (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:directMarketing
### Direct marketing

`xdm:directMarketing`
* is optional
* type: `object`
* defined in this schema

### xdm:directMarketing Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:email`| string | Optional |
| `xdm:emailBouncedCode`| string | Optional |
| `xdm:emailBouncedDetails`| string | Optional |
| `xdm:mailingID`| string | Optional |
| `xdm:mailingName`| string | Optional |
| `xdm:testVariantID`| string | Optional |
| `xdm:testVariantName`| string | Optional |



#### xdm:email
##### email

Recipient's email address.

`xdm:email`
* is optional
* type: `string`

##### xdm:email Type


`string`








#### xdm:emailBouncedCode
##### Email Bounced Code

Code denoting the type of bounce received from the Mail Transfer Agent.

`xdm:emailBouncedCode`
* is optional
* type: `string`

##### xdm:emailBouncedCode Type


`string`








#### xdm:emailBouncedDetails
##### Email Bounced Details

Details of email bounce from the Mail Transfer Agent.

`xdm:emailBouncedDetails`
* is optional
* type: `string`

##### xdm:emailBouncedDetails Type


`string`








#### xdm:mailingID
##### Mailing ID

Unique ID of the email asset.

`xdm:mailingID`
* is optional
* type: `string`

##### xdm:mailingID Type


`string`








#### xdm:mailingName
##### Mailing Name

Friendly name of the email asset.

`xdm:mailingName`
* is optional
* type: `string`

##### xdm:mailingName Type


`string`








#### xdm:testVariantID
##### Test Variant ID

Unique ID of the test variant of the email asset.

`xdm:testVariantID`
* is optional
* type: `string`

##### xdm:testVariantID Type


`string`








#### xdm:testVariantName
##### Test Variant Name

Friendly name of the test variant of the email asset.

`xdm:testVariantName`
* is optional
* type: `string`

##### xdm:testVariantName Type


`string`










